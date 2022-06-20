// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RotateRightOutlinedSvg from 'icon-base/es/asn/RotateRightOutlined';

export interface RotateRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRotateRightOutlined: RotateRightOutlinedIconType = (props, context) => (
    <Icon name='RotateRightOutlined' {...{ ...props, ...context.attrs }} icon={RotateRightOutlinedSvg} />
);

IconRotateRightOutlined.displayName = 'IconRotateRightOutlined';

export default IconRotateRightOutlined;
