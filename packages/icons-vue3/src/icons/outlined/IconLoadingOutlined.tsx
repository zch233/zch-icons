// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LoadingOutlinedSvg from 'gupo-icons-base/es/asn/LoadingOutlined';

export interface LoadingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLoadingOutlined: LoadingOutlinedIconType = (props, context) => (
    <Icon name='LoadingOutlined' {...{ ...props, ...context.attrs }} icon={LoadingOutlinedSvg} />
);

IconLoadingOutlined.displayName = 'IconLoadingOutlined';
IconLoadingOutlined.theme = 'outlined';
IconLoadingOutlined.originName = 'loading';

export default IconLoadingOutlined;
