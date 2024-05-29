declare module 'cli-progress' {
    class SingleBar {
        constructor(options: any, preset: any);
        start(total: number, startValue: number): void;
        update(value: number): void;
        stop(): void;
    }
    const Presets: {
        shades_classic: any;
    };
}
