// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LayoutOutlinedSvg from 'icon-base/es/asn/LayoutOutlined';

export interface LayoutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLayoutOutlined: LayoutOutlinedIconType = (props, context) => (
    <Icon name='LayoutOutlined' {...{ ...props, ...context.attrs }} icon={LayoutOutlinedSvg} />
);

IconLayoutOutlined.displayName = 'IconLayoutOutlined';

export default IconLayoutOutlined;
