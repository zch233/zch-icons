// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleOutlinedSvg from 'gupo-icons-base/es/asn/PoundCircleOutlined';

export interface PoundCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPoundCircleOutlined: PoundCircleOutlinedIconType = (props, context) => (
    <Icon name='PoundCircleOutlined' {...{ ...props, ...context.attrs }} icon={PoundCircleOutlinedSvg} />
);

IconPoundCircleOutlined.displayName = 'IconPoundCircleOutlined';
IconPoundCircleOutlined.theme = 'outlined';
IconPoundCircleOutlined.originName = 'pound-circle';

export default IconPoundCircleOutlined;
