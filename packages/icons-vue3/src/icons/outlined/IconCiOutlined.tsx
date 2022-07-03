// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiOutlinedSvg from 'icons-base/es/asn/CiOutlined';

export interface CiOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiOutlined: CiOutlinedIconType = (props, context) => <Icon name='CiOutlined' {...{ ...props, ...context.attrs }} icon={CiOutlinedSvg} />;

IconCiOutlined.displayName = 'IconCiOutlined';
IconCiOutlined.theme = 'outlined';
IconCiOutlined.originName = 'ci';

export default IconCiOutlined;
