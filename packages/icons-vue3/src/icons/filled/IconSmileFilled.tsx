// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SmileFilledSvg from 'icon-base/es/asn/SmileFilled';

export interface SmileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSmileFilled: SmileFilledIconType = (props, context) => <Icon name='SmileFilled' {...{ ...props, ...context.attrs }} icon={SmileFilledSvg} />;

IconSmileFilled.displayName = 'IconSmileFilled';

export default IconSmileFilled;
