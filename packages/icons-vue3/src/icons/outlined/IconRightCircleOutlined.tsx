// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightCircleOutlinedSvg from 'icon-base/es/asn/RightCircleOutlined';

export interface RightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRightCircleOutlined: RightCircleOutlinedIconType = (props, context) => (
    <Icon name='RightCircleOutlined' {...{ ...props, ...context.attrs }} icon={RightCircleOutlinedSvg} />
);

IconRightCircleOutlined.displayName = 'IconRightCircleOutlined';

export default IconRightCircleOutlined;
