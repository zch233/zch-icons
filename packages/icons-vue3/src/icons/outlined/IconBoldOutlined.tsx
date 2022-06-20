// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BoldOutlinedSvg from 'icon-base/es/asn/BoldOutlined';

export interface BoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBoldOutlined: BoldOutlinedIconType = (props, context) => <Icon name='BoldOutlined' {...{ ...props, ...context.attrs }} icon={BoldOutlinedSvg} />;

IconBoldOutlined.displayName = 'IconBoldOutlined';

export default IconBoldOutlined;
