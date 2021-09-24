import { FC } from 'react';
import { useCanvasContext } from 'app/hooks/useCanvas';
import useResponsiveSize from 'app/hooks/useResponsiveSize';
import { default as WaveObj } from 'app/lib/wave';

const Wave: FC = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();
    let frequency = 0.013;
    const waves = {
        frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgba(102, 25, 91, 0.89)'),
        backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgba(139, 65, 123, 0.89)'),
    };

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(waves).forEach(([, wave]) => {
            wave.draw(context!, width, height, frequency);
        });
        frequency += 0.013;
        requestAnimationFrame(render);
    };
    if (context) render();
    return null;
};

export default Wave;