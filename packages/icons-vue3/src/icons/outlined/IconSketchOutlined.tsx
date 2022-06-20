// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SketchOutlinedSvg from 'icon-base/es/asn/SketchOutlined';

export interface SketchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSketchOutlined: SketchOutlinedIconType = (props, context) => (
    <Icon name='SketchOutlined' {...{ ...props, ...context.attrs }} icon={SketchOutlinedSvg} />
);

IconSketchOutlined.displayName = 'IconSketchOutlined';

export default IconSketchOutlined;
