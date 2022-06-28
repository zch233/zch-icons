// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FireOutlinedSvg from 'gupo-icons-base/es/asn/FireOutlined';

export interface FireOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFireOutlined: FireOutlinedIconType = (props, context) => <Icon name='FireOutlined' {...{ ...props, ...context.attrs }} icon={FireOutlinedSvg} />;

IconFireOutlined.displayName = 'IconFireOutlined';
IconFireOutlined.theme = 'outlined';
IconFireOutlined.originName = 'fire';

export default IconFireOutlined;
