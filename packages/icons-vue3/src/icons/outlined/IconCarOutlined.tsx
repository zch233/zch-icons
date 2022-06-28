// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarOutlinedSvg from 'gupo-icons-base/es/asn/CarOutlined';

export interface CarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCarOutlined: CarOutlinedIconType = (props, context) => <Icon name='CarOutlined' {...{ ...props, ...context.attrs }} icon={CarOutlinedSvg} />;

IconCarOutlined.displayName = 'IconCarOutlined';
IconCarOutlined.theme = 'outlined';
IconCarOutlined.originName = 'car';

export default IconCarOutlined;
