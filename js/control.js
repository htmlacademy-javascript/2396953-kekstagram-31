function control() {
  const EffectConfig = {
    chrome: {
      style: 'grayscale', unit: '', sliderOptions: { min: 0, max: 1, step: 0.1 },
    },
    sepia: {
      style: 'sepia', unit: '', sliderOptions: { min: 0, max: 1, step: 0.1 },
    },
    marvin: {
      style: 'invert', unit: '%', sliderOptions: { min: 0, max: 100, step: 1 },
    },
    phobos: {
      style: 'blur', unit: 'px', sliderOptions: { min: 0, max: 3, step: 0.1 },
    },
    heat: {
      style: 'brightness', unit: '', sliderOptions: { min: 1, max: 3, step: 0.1 },
    }
  };

  const slider = document.querySelector('.effect-level__slider');
  const scaleValue = document.querySelector('.scale__control--value');
  const img = document.querySelector('.img-upload__preview img');
  const effectsItem = document.querySelectorAll('.effects__radio');

  const minus = document.querySelector('.scale__control--smaller');
  const plus = document.querySelector('.scale__control--bigger');

  const STEP_SCALE = 25;

  let scaleCurrentValue = parseInt(scaleValue.value);

  const changesScale = (value) => {
    scaleValue.value = `${value}%`;
    img.style.transform = `scale(${value / 100})`;
  };

  plus.addEventListener('click', () => {
    scaleCurrentValue = scaleCurrentValue + STEP_SCALE;
    changesScale(scaleCurrentValue);
  });

  minus.addEventListener('click', () => {
    scaleCurrentValue = scaleCurrentValue - STEP_SCALE;
    changesScale(scaleCurrentValue);
  });

  noUiSlider.create(slider, {
    range: {
      'min': 0,
      'max': 100
    },
    start: 100,
    step: 1,
    connect: 'lower'
  });

  const styleFilter = (style, effectValue, unit = '') => {
    img.style.filter = `${style}(${effectValue}${unit})`;
  };

  effectsItem.forEach((radioButton) => {
    radioButton.addEventListener('click', function () {
      const selectedValue = this.value;

      if (selectedValue === 'none') {
        img.style.filter = 'none';
      } else {
        const { style, unit, sliderOptions } = EffectConfig[selectedValue];

        styleFilter(style, sliderOptions.max, unit);

        slider.noUiSlider.updateOptions({
          range: {
            min: sliderOptions.min,
            max: sliderOptions.max,
          },
          step: sliderOptions.step,
        });

        slider.noUiSlider.on('update', () => {
          styleFilter(style, slider.noUiSlider.get(), unit);
        });
      }
    });
  });
}
export { control };
