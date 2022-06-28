// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RotateRightOutlinedSvg from 'gupo-icons-base/es/asn/RotateRightOutlined';

export interface RotateRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRotateRightOutlined: RotateRightOutlinedIconType = (props, context) => (
    <Icon name='RotateRightOutlined' {...{ ...props, ...context.attrs }} icon={RotateRightOutlinedSvg} />
);

IconRotateRightOutlined.displayName = 'IconRotateRightOutlined';
IconRotateRightOutlined.theme = 'outlined';
IconRotateRightOutlined.originName = 'rotate-right';

export default IconRotateRightOutlined;
