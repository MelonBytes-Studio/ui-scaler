import { Binding } from "@rbxts/react";

declare namespace UIScaler {
	export function useScaler(baseResolution: Vector2): ScalerApi;

	function usePx(): usePxApi;

	export interface ScalerApi {
		scale: Binding<number>;
		usePx: typeof usePx;
	}

	export interface usePxApi {
		(value: number): number;
		position: (x: number, y: number) => UDim2;
		unscale: (value: number) => number;
		udim2: (x: number, y: number) => UDim2;
		udim: (value: number) => UDim;
	}
}

export = UIScaler;
export as namespace UIScaler;
