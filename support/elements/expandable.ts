export interface Expandable {
    expand(): Promise<void>;
    collapse(): Promise<void>;
}
