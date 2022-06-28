// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RestOutlinedSvg from 'gupo-icons-base/es/asn/RestOutlined';

export interface RestOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRestOutlined: RestOutlinedIconType = (props, context) => <Icon name='RestOutlined' {...{ ...props, ...context.attrs }} icon={RestOutlinedSvg} />;

IconRestOutlined.displayName = 'IconRestOutlined';
IconRestOutlined.theme = 'outlined';
IconRestOutlined.originName = 'rest';

export default IconRestOutlined;
