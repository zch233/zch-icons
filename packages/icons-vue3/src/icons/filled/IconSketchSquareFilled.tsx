// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SketchSquareFilledSvg from 'icons-base/es/asn/SketchSquareFilled';

export interface SketchSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSketchSquareFilled: SketchSquareFilledIconType = (props, context) => (
    <Icon name='SketchSquareFilled' {...{ ...props, ...context.attrs }} icon={SketchSquareFilledSvg} />
);

IconSketchSquareFilled.displayName = 'IconSketchSquareFilled';
IconSketchSquareFilled.theme = 'filled';
IconSketchSquareFilled.originName = 'sketch-square';

export default IconSketchSquareFilled;
