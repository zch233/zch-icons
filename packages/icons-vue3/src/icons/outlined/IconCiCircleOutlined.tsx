// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleOutlinedSvg from 'icons-base/es/asn/CiCircleOutlined';

export interface CiCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiCircleOutlined: CiCircleOutlinedIconType = (props, context) => (
    <Icon name='CiCircleOutlined' {...{ ...props, ...context.attrs }} icon={CiCircleOutlinedSvg} />
);

IconCiCircleOutlined.displayName = 'IconCiCircleOutlined';
IconCiCircleOutlined.theme = 'outlined';
IconCiCircleOutlined.originName = 'ci-circle';

export default IconCiCircleOutlined;
