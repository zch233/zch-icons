// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftCircleOutlinedSvg from 'gupo-icons-base/es/asn/LeftCircleOutlined';

export interface LeftCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftCircleOutlined: LeftCircleOutlinedIconType = (props, context) => (
    <Icon name='LeftCircleOutlined' {...{ ...props, ...context.attrs }} icon={LeftCircleOutlinedSvg} />
);

IconLeftCircleOutlined.displayName = 'IconLeftCircleOutlined';
IconLeftCircleOutlined.theme = 'outlined';
IconLeftCircleOutlined.originName = 'left-circle';

export default IconLeftCircleOutlined;
