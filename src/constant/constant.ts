export const LIFT_STATE = {
  OPENING: 'OPENING',
  CLOSING: 'CLOSING',
  CLOSED: 'CLOSED',
  MOVING: 'MOVING',
  LOCKED: 'LOCKED',
}

export const LIFT_EVENT = {
  FLOOR_REACHED: 'FLOOR_REACHED',
  IS_IDLE: 'IS_IDLE',
  STARTED_MOVING: 'STARTED_MOVING',
}

export const FLOOR_EVENT = {
  FLOOR_BUTTON_UP_CLICK: 'FLOOR_BUTTON_UP_CLICK',
  FLOOR_BUTTON_DOWN_CLICK: 'FLOOR_BUTTON_DOWN_CLICK',
}

export const DIMENSIONS = {
  FLOOR_HEIGHT_PX: 100,
  LIFT_TIME_TO_COVER_FLOOR_IN_MILLI_SECONDS: 2000,
  LIFT_GAP: 60,
}