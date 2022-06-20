// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseCircleFilledSvg from 'icon-base/es/asn/CloseCircleFilled';

export interface CloseCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseCircleFilled: CloseCircleFilledIconType = (props, context) => (
    <Icon name='CloseCircleFilled' {...{ ...props, ...context.attrs }} icon={CloseCircleFilledSvg} />
);

IconCloseCircleFilled.displayName = 'IconCloseCircleFilled';

export default IconCloseCircleFilled;
