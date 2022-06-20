// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenCircleFilledSvg from 'icon-base/es/asn/CodepenCircleFilled';

export interface CodepenCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCodepenCircleFilled: CodepenCircleFilledIconType = (props, context) => (
    <Icon name='CodepenCircleFilled' {...{ ...props, ...context.attrs }} icon={CodepenCircleFilledSvg} />
);

IconCodepenCircleFilled.displayName = 'IconCodepenCircleFilled';

export default IconCodepenCircleFilled;
