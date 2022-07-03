// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldOutlinedSvg from 'icons-base/es/asn/GoldOutlined';

export interface GoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoldOutlined: GoldOutlinedIconType = (props, context) => <Icon name='GoldOutlined' {...{ ...props, ...context.attrs }} icon={GoldOutlinedSvg} />;

IconGoldOutlined.displayName = 'IconGoldOutlined';
IconGoldOutlined.theme = 'outlined';
IconGoldOutlined.originName = 'gold';

export default IconGoldOutlined;
