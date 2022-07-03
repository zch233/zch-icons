// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsTwotoneSvg from 'icons-base/es/asn/TagsTwotone';

export interface TagsTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagsTwotone: TagsTwotoneIconType = (props, context) => <Icon name='TagsTwotone' {...{ ...props, ...context.attrs }} icon={TagsTwotoneSvg} />;

IconTagsTwotone.displayName = 'IconTagsTwotone';
IconTagsTwotone.theme = 'twotone';
IconTagsTwotone.originName = 'tags';

export default IconTagsTwotone;
