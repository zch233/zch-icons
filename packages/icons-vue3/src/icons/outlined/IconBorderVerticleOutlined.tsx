// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderVerticleOutlinedSvg from 'gupo-icons-base/es/asn/BorderVerticleOutlined';

export interface BorderVerticleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderVerticleOutlined: BorderVerticleOutlinedIconType = (props, context) => (
    <Icon name='BorderVerticleOutlined' {...{ ...props, ...context.attrs }} icon={BorderVerticleOutlinedSvg} />
);

IconBorderVerticleOutlined.displayName = 'IconBorderVerticleOutlined';
IconBorderVerticleOutlined.theme = 'outlined';
IconBorderVerticleOutlined.originName = 'border-verticle';

export default IconBorderVerticleOutlined;
