type Modifier = string;

declare enum InternalModifier {
    Outside = 'outside',
    Disabled = 'disabled',
    Selected = 'selected',
    Hidden = 'hidden',
    Today = 'today',
    RangeStart = 'range_start',
    RangeEnd = 'range_end',
    RangeMiddle = 'range_middle',
}

type ActiveModifiers = Record<Modifier, true> &
    Partial<Record<InternalModifier, true>>;

interface DayContentPropsType {
    date: Date;
    displayMonth: Date;
    activeModifiers: ActiveModifiers;
}

export type { DayContentPropsType };
