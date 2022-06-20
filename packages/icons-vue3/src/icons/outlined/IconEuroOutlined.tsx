// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroOutlinedSvg from 'icon-base/es/asn/EuroOutlined';

export interface EuroOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEuroOutlined: EuroOutlinedIconType = (props, context) => <Icon name='EuroOutlined' {...{ ...props, ...context.attrs }} icon={EuroOutlinedSvg} />;

IconEuroOutlined.displayName = 'IconEuroOutlined';

export default IconEuroOutlined;
