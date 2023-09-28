import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';

export function PercentageBar() {
  const [sliderValue, setSliderValue] = useState(1_375_000);

  const handleSliderChange = (value:any) => {
    setSliderValue(value);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <h2 className="text-white text-[64px] font-bold font-sans">{`Kz ${sliderValue}`}</h2>
        <div>
          <span className="text-white text-base font-bold font-sans underline leading-normal">10 eventos</span>
          <span className="text-white text-base font-normal font-sans leading-normal"> de 500 pessoas a uma taxa estimada de kz 275 por ticket.</span>
        </div>
      </div>

      <div className="flex items-center">
        <form>
          <Slider.Root
            className="SliderRoot"
            value={[sliderValue]}
            onValueChange={(newValue) => handleSliderChange(newValue[0])}
            max={5_000_000}
            step={1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
        </form>
      </div>
    </>
  );
}
