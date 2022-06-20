// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LoadingOutlinedSvg from 'icon-base/es/asn/LoadingOutlined';

export interface LoadingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLoadingOutlined: LoadingOutlinedIconType = (props, context) => (
    <Icon name='LoadingOutlined' {...{ ...props, ...context.attrs }} icon={LoadingOutlinedSvg} />
);

IconLoadingOutlined.displayName = 'IconLoadingOutlined';

export default IconLoadingOutlined;
