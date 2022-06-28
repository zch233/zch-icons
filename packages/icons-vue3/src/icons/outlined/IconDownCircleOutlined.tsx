// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownCircleOutlinedSvg from 'gupo-icons-base/es/asn/DownCircleOutlined';

export interface DownCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownCircleOutlined: DownCircleOutlinedIconType = (props, context) => (
    <Icon name='DownCircleOutlined' {...{ ...props, ...context.attrs }} icon={DownCircleOutlinedSvg} />
);

IconDownCircleOutlined.displayName = 'IconDownCircleOutlined';
IconDownCircleOutlined.theme = 'outlined';
IconDownCircleOutlined.originName = 'down-circle';

export default IconDownCircleOutlined;
