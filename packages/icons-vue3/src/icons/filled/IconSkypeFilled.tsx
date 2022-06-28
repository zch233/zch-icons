// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkypeFilledSvg from 'gupo-icons-base/es/asn/SkypeFilled';

export interface SkypeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSkypeFilled: SkypeFilledIconType = (props, context) => <Icon name='SkypeFilled' {...{ ...props, ...context.attrs }} icon={SkypeFilledSvg} />;

IconSkypeFilled.displayName = 'IconSkypeFilled';
IconSkypeFilled.theme = 'filled';
IconSkypeFilled.originName = 'skype';

export default IconSkypeFilled;
