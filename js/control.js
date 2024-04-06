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
  const scale = document.querySelector('.scale');
  const scaleValue = document.querySelector('.scale__control--value');
  const img = document.querySelector('.img-upload__preview img');
  const effectsItem = document.querySelectorAll('.effects__radio');

  const STEP_SCALE = 25;

  let changesEffectValue = 0;
  let scaleCurrentValue = parseInt(scaleValue.value);

  let changesScale = (value) => {
    scaleValue.value = `${value}%`;
    img.style.transform = `scale(${value / 100})`;
  }

  scale.addEventListener('click', (event) => {
    if (event.target.classList.contains('scale__control--smaller')) {
      scaleCurrentValue -= STEP_SCALE;
      changesScale(scaleCurrentValue);
    } else if (event.target.classList.contains('scale__control--bigger')) {
      scaleCurrentValue += STEP_SCALE;
      changesScale(scaleCurrentValue);
    }
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
  }

  effectsItem.forEach(radioButton => {
    radioButton.addEventListener('click', function () {
      const selectedValue = this.value;

      if (selectedValue === 'none') {
        img.style.filter = 'none';
      } else {
        let arrEffectValue = EffectConfig[selectedValue];
        let { style, unit, sliderOptions } = arrEffectValue;

        styleFilter(style, sliderOptions.max, unit);

        slider.noUiSlider.updateOptions({
          range: {
            min: sliderOptions.min,
            max: sliderOptions.max,
          },
          step: sliderOptions.step,
        });

        slider.noUiSlider.on('update', () => {
          changesEffectValue = slider.noUiSlider.get();
          styleFilter(style, changesEffectValue, unit);
        });
      }
    });
  });
}
export { control };
