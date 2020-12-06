const isFunction = (fn: any) => typeof fn === 'function';
export type Nullable<T> = T | null | undefined;

export interface SubscriptionLike {
  unsubscribe(): void;
}

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubSink {

  protected subs: Nullable<SubscriptionLike>[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.sink = observable$.subscribe(...)
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
   add(subscription: Nullable<SubscriptionLike>): this {
    this.subs.push(subscription);
    return this;
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  unsubscribe(): void {
    this.subs.forEach(sub => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
    this.subs = [];
  }
}
