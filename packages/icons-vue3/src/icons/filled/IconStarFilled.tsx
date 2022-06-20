// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StarFilledSvg from 'icon-base/es/asn/StarFilled';

export interface StarFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStarFilled: StarFilledIconType = (props, context) => <Icon name='StarFilled' {...{ ...props, ...context.attrs }} icon={StarFilledSvg} />;

IconStarFilled.displayName = 'IconStarFilled';

export default IconStarFilled;
