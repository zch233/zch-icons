// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiOutlinedSvg from 'icon-base/es/asn/CiOutlined';

export interface CiOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCiOutlined: CiOutlinedIconType = (props, context) => <Icon name='CiOutlined' {...{ ...props, ...context.attrs }} icon={CiOutlinedSvg} />;

IconCiOutlined.displayName = 'IconCiOutlined';

export default IconCiOutlined;
