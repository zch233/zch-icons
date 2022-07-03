// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagTwotoneSvg from 'icons-base/es/asn/TagTwotone';

export interface TagTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagTwotone: TagTwotoneIconType = (props, context) => <Icon name='TagTwotone' {...{ ...props, ...context.attrs }} icon={TagTwotoneSvg} />;

IconTagTwotone.displayName = 'IconTagTwotone';
IconTagTwotone.theme = 'twotone';
IconTagTwotone.originName = 'tag';

export default IconTagTwotone;
