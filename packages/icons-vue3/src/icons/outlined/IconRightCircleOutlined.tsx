// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightCircleOutlinedSvg from 'gupo-icons-base/es/asn/RightCircleOutlined';

export interface RightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRightCircleOutlined: RightCircleOutlinedIconType = (props, context) => (
    <Icon name='RightCircleOutlined' {...{ ...props, ...context.attrs }} icon={RightCircleOutlinedSvg} />
);

IconRightCircleOutlined.displayName = 'IconRightCircleOutlined';
IconRightCircleOutlined.theme = 'outlined';
IconRightCircleOutlined.originName = 'right-circle';

export default IconRightCircleOutlined;
