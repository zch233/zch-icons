// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SketchCircleFilledSvg from 'icon-base/es/asn/SketchCircleFilled';

export interface SketchCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSketchCircleFilled: SketchCircleFilledIconType = (props, context) => (
    <Icon name='SketchCircleFilled' {...{ ...props, ...context.attrs }} icon={SketchCircleFilledSvg} />
);

IconSketchCircleFilled.displayName = 'IconSketchCircleFilled';

export default IconSketchCircleFilled;
