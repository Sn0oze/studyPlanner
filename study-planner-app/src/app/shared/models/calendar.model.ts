export interface TimeSegment {
  hour: string;
  minutes: string;
}

export interface TimeSlot {
  start: TimeSegment;
  end: TimeSegment;
}

export interface ModuleRow{
  timeSlot: TimeSlot;
  modules: string[];
}
