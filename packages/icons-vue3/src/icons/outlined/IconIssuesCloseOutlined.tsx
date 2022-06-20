// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IssuesCloseOutlinedSvg from 'icon-base/es/asn/IssuesCloseOutlined';

export interface IssuesCloseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIssuesCloseOutlined: IssuesCloseOutlinedIconType = (props, context) => (
    <Icon name='IssuesCloseOutlined' {...{ ...props, ...context.attrs }} icon={IssuesCloseOutlinedSvg} />
);

IconIssuesCloseOutlined.displayName = 'IconIssuesCloseOutlined';

export default IconIssuesCloseOutlined;
