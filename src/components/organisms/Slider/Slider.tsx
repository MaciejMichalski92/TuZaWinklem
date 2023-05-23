import { SliderProps } from './Slider.types';
import style from './Slider.module.scss';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

export const Slider = ({ cards }: SliderProps) => (
  <div className={style.Slider}>
    <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={3}
      slidesToScroll={1}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Glider>
  </div>
);
