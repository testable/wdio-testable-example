/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace WebdriverIO {
//   interface Config {
//   }

//   interface Element {
//   }

    interface Browser {
        testableLogTrace: () => any;
        testableLogDebug: () => any;
        testableLogInfo: () => any;
        testableLogError: () => any;
        testableLogFatal: () => any;
        testableCsvGet: (name: string, index: number) => any;
        testableCsvRandom: (name: string) => any;
        testableCsvNext: (name: string, options: any) => any;
        testableResult: (resource: string, url: string) => any;
        testableTiming: (result: any) => any;
        testableCounter: (result: any) => any;
        testableHistogram: (result: any) => any;
        testableMetered: (result: any) => any;
        testableGetMetric: () => any;
        testableWaitForValue: (options: any) => any;
        testableWaitForCondition: (options: any) => any;
        testableIncrementAndWaitForValue: (options: any) => any;
        testableBarrier: (name: string, value: any) => any;
        testableInfo: () => any;

        testableScreenshot: (name: string) => any;
        testableStopwatch: (code: string, metricName: string, resource: string) => any;
        testableWaitForEvent: (eventName: string, timeout: number, defaultVal: any) => any;

        testableWaitForFinish: () => any;
    }
}

declare module '@wdio/logger'
