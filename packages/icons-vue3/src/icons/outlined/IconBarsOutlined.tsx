// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BarsOutlinedSvg from 'icons-base/es/asn/BarsOutlined';

export interface BarsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBarsOutlined: BarsOutlinedIconType = (props, context) => <Icon name='BarsOutlined' {...{ ...props, ...context.attrs }} icon={BarsOutlinedSvg} />;

IconBarsOutlined.displayName = 'IconBarsOutlined';
IconBarsOutlined.theme = 'outlined';
IconBarsOutlined.originName = 'bars';

export default IconBarsOutlined;
