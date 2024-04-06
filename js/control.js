function control() {
  // const SLIDER_INITIAL_MIN = 0;
  // const SLIDER_INITIAL_MAX = 100;
  // const SLIDER_INITIAL_STEP = 1;

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

  // const initialSliderOptions = {
  //   range: {
  //     min: SLIDER_INITIAL_MIN,
  //     max: SLIDER_INITIAL_MAX,
  //   },
  //   start: SLIDER_INITIAL_MAX,
  //   step: SLIDER_INITIAL_STEP,
  //   connect: 'lower',
  //   format: {
  //     to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
  //     from: (value) => parseFloat(value),
  //   },
  // };

  const slider = document.querySelector('.effect-level__slider');



  const scale = document.querySelector('.scale'),
    scaleValue = scale.querySelector('.scale__control--value');
  const img = document.querySelector('.img-upload__preview img');
  const effectsItem = document.querySelectorAll('.effects__radio');
  const effectsChecked = document.querySelector('input[name="effect"]:checked');
  const effects = document.querySelector('.effects__list');
  let changesEffectValue = 0;


  let scaleCurrentValue = parseInt(scaleValue.value);

  let changesScale = (value) => {
    scaleValue.value = `${value}%`
    img.style.transform = `scale(${value / 100})`;
  }

  scale.addEventListener('click', (event) => {
    if (event.target.classList.contains('scale__control--smaller')) {
      scaleCurrentValue -= 25;
      changesScale(scaleCurrentValue);
    } else if (event.target.classList.contains('scale__control--bigger')) {
      scaleCurrentValue += 25;
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
        const arrEffectValue = EffectConfig[selectedValue];
        const { style, unit, sliderOptions } = arrEffectValue;
        const { min, max, step } = sliderOptions;

        styleFilter(style, max, unit);

        slider.noUiSlider.on('update', () => {
          changesEffectValue = slider.noUiSlider.get();
          styleFilter(style, changesEffectValue, unit);
        });
      }
    });
  });

}
export { control };

// Shift + Alt + F
