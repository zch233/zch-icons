// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import Loading3QuartersOutlinedSvg from 'icon-base/es/asn/Loading3QuartersOutlined';

export interface Loading3QuartersOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLoading3QuartersOutlined: Loading3QuartersOutlinedIconType = (props, context) => (
    <Icon name='Loading3QuartersOutlined' {...{ ...props, ...context.attrs }} icon={Loading3QuartersOutlinedSvg} />
);

IconLoading3QuartersOutlined.displayName = 'IconLoading3QuartersOutlined';

export default IconLoading3QuartersOutlined;
