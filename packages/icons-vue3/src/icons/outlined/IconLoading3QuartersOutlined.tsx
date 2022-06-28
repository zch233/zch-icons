// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Loading3QuartersOutlinedSvg from 'gupo-icons-base/es/asn/Loading3QuartersOutlined';

export interface Loading3QuartersOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLoading3QuartersOutlined: Loading3QuartersOutlinedIconType = (props, context) => (
    <Icon name='Loading3QuartersOutlined' {...{ ...props, ...context.attrs }} icon={Loading3QuartersOutlinedSvg} />
);

IconLoading3QuartersOutlined.displayName = 'IconLoading3QuartersOutlined';
IconLoading3QuartersOutlined.theme = 'outlined';
IconLoading3QuartersOutlined.originName = 'loading-3-quarters';

export default IconLoading3QuartersOutlined;
