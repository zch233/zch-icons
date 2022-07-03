// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenCircleFilledSvg from 'icons-base/es/asn/CodepenCircleFilled';

export interface CodepenCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodepenCircleFilled: CodepenCircleFilledIconType = (props, context) => (
    <Icon name='CodepenCircleFilled' {...{ ...props, ...context.attrs }} icon={CodepenCircleFilledSvg} />
);

IconCodepenCircleFilled.displayName = 'IconCodepenCircleFilled';
IconCodepenCircleFilled.theme = 'filled';
IconCodepenCircleFilled.originName = 'codepen-circle';

export default IconCodepenCircleFilled;
