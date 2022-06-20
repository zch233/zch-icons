// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleOutlinedSvg from 'icon-base/es/asn/CiCircleOutlined';

export interface CiCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCiCircleOutlined: CiCircleOutlinedIconType = (props, context) => (
    <Icon name='CiCircleOutlined' {...{ ...props, ...context.attrs }} icon={CiCircleOutlinedSvg} />
);

IconCiCircleOutlined.displayName = 'IconCiCircleOutlined';

export default IconCiCircleOutlined;
