// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellOutlinedSvg from 'icon-base/es/asn/BellOutlined';

export interface BellOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBellOutlined: BellOutlinedIconType = (props, context) => <Icon name='BellOutlined' {...{ ...props, ...context.attrs }} icon={BellOutlinedSvg} />;

IconBellOutlined.displayName = 'IconBellOutlined';

export default IconBellOutlined;
