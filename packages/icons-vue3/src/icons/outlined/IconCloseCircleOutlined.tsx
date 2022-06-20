// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseCircleOutlinedSvg from 'icon-base/es/asn/CloseCircleOutlined';

export interface CloseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseCircleOutlined: CloseCircleOutlinedIconType = (props, context) => (
    <Icon name='CloseCircleOutlined' {...{ ...props, ...context.attrs }} icon={CloseCircleOutlinedSvg} />
);

IconCloseCircleOutlined.displayName = 'IconCloseCircleOutlined';

export default IconCloseCircleOutlined;
