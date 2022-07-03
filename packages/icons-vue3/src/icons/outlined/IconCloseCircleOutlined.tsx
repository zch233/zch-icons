// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseCircleOutlinedSvg from 'icons-base/es/asn/CloseCircleOutlined';

export interface CloseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloseCircleOutlined: CloseCircleOutlinedIconType = (props, context) => (
    <Icon name='CloseCircleOutlined' {...{ ...props, ...context.attrs }} icon={CloseCircleOutlinedSvg} />
);

IconCloseCircleOutlined.displayName = 'IconCloseCircleOutlined';
IconCloseCircleOutlined.theme = 'outlined';
IconCloseCircleOutlined.originName = 'close-circle';

export default IconCloseCircleOutlined;
