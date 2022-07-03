// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SketchOutlinedSvg from 'icons-base/es/asn/SketchOutlined';

export interface SketchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSketchOutlined: SketchOutlinedIconType = (props, context) => (
    <Icon name='SketchOutlined' {...{ ...props, ...context.attrs }} icon={SketchOutlinedSvg} />
);

IconSketchOutlined.displayName = 'IconSketchOutlined';
IconSketchOutlined.theme = 'outlined';
IconSketchOutlined.originName = 'sketch';

export default IconSketchOutlined;
